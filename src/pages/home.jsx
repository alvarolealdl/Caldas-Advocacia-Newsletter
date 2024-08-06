import React from "react";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import { Button, Col, Row } from "react-bootstrap";
import Icons from "../components/Icons";

const pdfFile = "/files/CaldasAdvocacia.pdf";
const goToWhatsappChat = "https://wa.me/5511987654321";

const Home = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin({
    sidebarTabs: () => [],
  });

  return (
    <div className="landing-page-newsletter">
      <header>
        <h1 className="font-weight-bold m-0">Caldas Advocacia</h1>
      </header>
      <main>
        <div className="landing-page-newsletter__pdf-viewer">
          <Worker
            workerUrl={`https://unpkg.com/pdfjs-dist@2.16.105/build/pdf.worker.min.js`}
          >
            <Viewer fileUrl={pdfFile} plugins={[defaultLayoutPluginInstance]} />
          </Worker>
        </div>
        <div className="landing-page-newsletter__buttons">
          <Row>
            <Col className="text-start">
              <Button
                variant="primary"
                href={pdfFile}
                download="CaldasAdvocacia.pdf"
                className="font-weight-bold"
              >
                Baixar PDF
                <Icons
                  typeIcon="pdf"
                  iconSize={25}
                  fill="#fff"
                  className="button-icon"
                />
              </Button>
            </Col>
            <Col className="text-end">
              <Button
                variant="primary"
                href={goToWhatsappChat}
                target="_blank"
                className="font-weight-bold mr-1"
              >
                Whatsapp
                <Icons
                  typeIcon="whatsapp"
                  iconSize={25}
                  fill="#fff"
                  className="button-icon"
                />
              </Button>
              <Button
                variant="primary"
                href="/form"
                target="_blank"
                className="font-weight-bold"
              >
                Google Forms
                <Icons
                  typeIcon="form"
                  iconSize={25}
                  fill="#fff"
                  className="button-icon"
                />
              </Button>
            </Col>
          </Row>
        </div>
      </main>
    </div>
  );
};

export default Home;
