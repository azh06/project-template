import React, { ChangeEvent, useState } from "react";
import * as Form from "@radix-ui/react-form";

type FormFieldProps = {
  name: string;
  label: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
};

const FormField = ({ name, label, value, onChange }: FormFieldProps) => {
  return (
    <Form.Field className="mb-2.5 grid" name={name}>
      <div className="flex items-baseline justify-between">
        <Form.Label className="text-[15px] font-medium leading-[35px]">{label}</Form.Label>
      </div>
      <Form.Control asChild>
        <textarea
          className="box-border inline-flex w-full resize-none items-center justify-center rounded p-2.5 text-[15px] leading-none"
          value={value}
          onChange={onChange}
          required
        />
      </Form.Control>
    </Form.Field>
  );
};

const BlogForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    content: "",
  });

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async () => {};

  return (
    <Form.Root className="w-[260px]">
      <FormField name="title" label="Title" value={formData.title} onChange={handleChange} />
      <FormField name="author" label="Author" value={formData.author} onChange={handleChange} />
      <FormField name="content" label="Blog Content" value={formData.content} onChange={handleChange} />
      <Form.Submit asChild>
        <button
          onClick={handleSubmit}
          className="mt-2.5 box-border inline-flex h-[35px] w-full items-center justify-center px-[15px] font-medium leading-none outline-black"
        >
          Post Blog
        </button>
      </Form.Submit>
    </Form.Root>
  );
};

export default BlogForm;
