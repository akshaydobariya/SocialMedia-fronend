import { Form } from "react-bootstrap";

const FormGroup = ({
  controlId,
  label,
  name,
  type,
  value,
  onChange,
  onBlur,
  error,
}) => (
  <Form.Group className="mb-3" controlId={controlId}>
    <Form.Label className="text-center">{label}</Form.Label>
    <Form.Control
      type={type}
      placeholder={`Enter ${label.toLowerCase()}`}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      name={name}
      data-testid={`${name}-input`}
    />
    {error && <div className="text-danger">{error}</div>}
  </Form.Group>
);

export default FormGroup;
