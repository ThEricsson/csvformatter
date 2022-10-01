import Formulario from "../../components/image/Form";
import Layout from "../../components/layout/layout";

function uploadImage() {
  return (
    <Layout title="Home" pageTitle="Pujar arxiu">
      <div className="row d-flex justify-content-center">
        <div className="col-9">
          <Formulario></Formulario>
        </div>
      </div>
    </Layout>
  );
}

export default uploadImage;
