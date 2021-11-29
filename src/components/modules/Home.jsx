import React from "react";

/* UI Library Components */
import { Button, Col, Modal, Row, Typography } from "antd";

/* Charts */
import BogotaMapChart from "../charts/BogotaMapChart";

/* Utils */
import { homeTexts, homeTitles } from "../../utils/texts";

/* UI Library Sub-components*/
const { Title } = Typography;

const Home = () => {
  const showModal = (title) => {
    Modal.info({
      width: "800px",
      title: homeTitles[title],
      maskClosable: true,
      icon: null,
      okText: "Cerrar",
      content: homeTexts[title],
    });
  };

  return (
    <>
      <Row
        className="home--headline"
        /* style={{ padding: "40px 5px", textAlign: "center" }} */
        justify="center"
        align="middle"
      >
        <Col flex sm={24} lg={12}>
          <Title>Lorem Ipsum</Title>
          <Title level={2}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa enim
            illum maiores facere, debitis aliquid facilis, nemo sunt fugiat
            repellat aperiam doloribus doloremque! Porro, optio? Unde aliquam
            tempore voluptates eius!
          </Title>
        </Col>
      </Row>
      <Row
        style={{
          padding: "40px 5px",
          textAlign: "center",
          backgroundColor: "#dce1e6",
          minHeight: "140px",
        }}
        justify="center"
        align="middle"
      >
        <Col className="margin-20">
          <Button
            onClick={() => showModal("mision")}
            size="large"
            type="dashed"
            className="home--button"
          >
            Misión
          </Button>
        </Col>
        <Col className="margin-20">
          <Button
            onClick={() => showModal("vision")}
            size="large"
            type="dashed"
            className="home--button"
          >
            Visión
          </Button>
        </Col>
        <Col className="margin-20">
          <Button
            onClick={() => showModal("hacemos")}
            size="large"
            type="dashed"
            className="home--button"
          >
            Qué hacemos
          </Button>
        </Col>
        <Col className="margin-20">
          <Button
            onClick={() => showModal("objetivos")}
            size="large"
            type="dashed"
            className="home--button"
          >
            Objetivos
          </Button>
        </Col>
      </Row>
      <Row justify="center" align="middle" style={{ marginTop: "40px" }}>
        <Col span={24}>
          <BogotaMapChart title="Mapa de Bogotá" />
        </Col>
      </Row>
    </>
  );
};

export default Home;
