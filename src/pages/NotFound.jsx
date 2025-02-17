import {Layout} from "../components/Layout";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Layout>
      <section className="section has-text-centered">
        <div className="container">
          <h1 className="title is-1">404</h1>
          <p className="subtitle is-3">Page Not Found</p>
          <Link to="/" className="button is-primary">Go Home</Link>
        </div>
      </section>
    </Layout>
  );
}

export { NotFound };