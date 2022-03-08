import React, { useEffect } from "react";

/* Components */
import ErrorWarning from "../ErrorWarning";
import LoadingCard from "../LoadingCard";

/* UI Library Components */
import { Col, Divider, Row, Table, Typography } from "antd";

/* Utilities */
import { APIRequest } from "../../apis/api";

/* Icons */
import { FilePdfOutlined } from "@ant-design/icons";

/* UI Library Sub-components */
const { Column } = Table;
const { Title } = Typography;

const Regulations = ({ core }) => {
  const [state] = APIRequest(`${core.URL}?data=info`);

  useEffect(() => {
    document.title = "SALUDATA | Autores";
  }, []);

  setTimeout(() => {
    core.setHome(false);
  }, 10);

  if (state.isError) {
    return <ErrorWarning />;
  } else if (state.isLoading) {
    return <LoadingCard />;
  }
  return (
    <Row justify="center" style={{ marginTop: "50px", marginBottom: "30px" }}>
      <Col xxl={18} md={22} xs={24}>
        <Title level={2}>
          Normatividad del sistema de investigación en salud.
        </Title>
        <Divider />
        <Title level={4}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
          veritatis expedita quis, quas velit explicabo cupiditate voluptatum!
          Tempore, modi rem! Suscipit perferendis ea modi ullam. Pariatur porro
          exercitationem similique sit!
        </Title>
        <Table
          style={{ marginTop: "30px" }}
          dataSource={state.data.data}
          pagination={false}
          rowKey={(record) => state.data.data.indexOf(record)}
        >
          <Column align="center" render={() => <FilePdfOutlined />} />
          <Column
            title="Documento"
            dataIndex="filename"
            render={(item) => (
              <a
                id="regulations__table--link"
                href={`http://clustercien.udea.edu.co:8989/app/regulations?file=${item}`}
              >
                {item}
              </a>
            )}
          />
          <Column
            title="Tamaño"
            dataIndex="size"
            render={(item) =>
              item < 1024
                ? `${item.toFixed(2)} KB`
                : `${(item / 1024).toFixed(2)} MB`
            }
          />
        </Table>
      </Col>
    </Row>
  );
};

export default Regulations;