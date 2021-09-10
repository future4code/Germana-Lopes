import { useState } from "react";

const useForm = (inicialState) => {
  const [form, setForm] = useState(inicialState);

  const handleForm = (event) => {
    const { value, name } = event.target
    setForm({ ...form, [name]: value })
  };

  const clear = () => {
    setForm(inicialState)
  }

  return [form, handleForm, clear];
}

export default useForm