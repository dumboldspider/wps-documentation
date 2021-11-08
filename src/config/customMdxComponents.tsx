import LinkedTypography from "../components/LinkedTypography";

const customComponents = {
  h1: (props) => (
    <LinkedTypography
      variant="h1"
      className={"linked-heading"}
      style={{ marginBottom: 20 }}
      {...props}
    />
  ),
  h2: (props) => (
    <LinkedTypography
      variant="h2"
      className={"linked-heading"}
      style={{ marginBottom: 20, marginTop: 0 }}
      {...props}
    />
  ),
  h3: (props) => (
    <LinkedTypography
      variant="h3"
      className={"linked-heading"}
      style={{ marginBottom: 20, marginTop: 0 }}
      {...props}
    />
  ),
  h4: (props) => (
    <LinkedTypography
      variant="h4"
      className={"linked-heading"}
      style={{ marginBottom: 20, marginTop: 0 }}
      {...props}
    />
  ),
  h5: (props) => (
    <LinkedTypography
      variant="h5"
      className={"linked-heading"}
      style={{ marginBottom: 20, marginTop: 0 }}
      {...props}
    />
  ),
  h6: (props) => (
    <LinkedTypography
      variant="h6"
      className={"linked-heading"}
      style={{ marginBottom: 20, marginTop: 0 }}
      {...props}
    />
  ),
};

export default customComponents;
