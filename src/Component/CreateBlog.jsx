import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { createClient } from "@supabase/supabase-js";

const supabase = createClient("https://tvyypbujdxkrgljumtly.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR2eXlwYnVqZHhrcmdsanVtdGx5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ0ODQ5MjUsImV4cCI6MjAzMDA2MDkyNX0.kOOaxxW8RN3MTkB70W0Dsnr9T5FKVl8ntfLxPs5jiy4");

const SignupSchema = Yup.object().shape({
  title: Yup.string().required('Required'),
  desc: Yup.string().required('Required'),
  image: Yup.string().required('Required'),
  para1: Yup.string().required('Required'),
  para2: Yup.string().required('Required'),
  para3: Yup.string().required('Required'),
});

const CreateBlog = () => (
  <div className="py-12 px-4 sm:px-6 lg:px-8">
    <h1 className="text-3xl font-bold mb-6">Signup</h1>
    <Formik
      initialValues={{
        title: '',
        desc: '',
        image: '',
        para1: '',
        para2: '',
        para3: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={async (values) => {
        const { data, error } = await supabase.from("Blog").insert([{
          id: Math.floor(Math.random() * 9),
          title: values.title,
          desc: values.desc,
          image: values.image,
          para1: values.para1,
          para2: values.para2,
          para3: values.para3,
        }]);
        console.log(values);
        if (error) {
          console.log("data not sent");
        } else {
          console.log("data sent");
        }
      }}
    >
      {({ errors, touched }) => (
        <Form className="max-w-lg mx-auto">
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700 font-bold mb-2">Title</label>
            <Field name="title" className="border rounded-md border-black p-2 w-full" />
            {errors.title && touched.title && <div className="text-red-500">{errors.title}</div>}
          </div>
          <div className="mb-4">
            <label htmlFor="desc" className="block text-gray-700 font-bold mb-2">Description</label>
            <Field name="desc" className="border rounded-md border-black p-2 w-full" />
            {errors.desc && touched.desc && <div className="text-red-500">{errors.desc}</div>}
          </div>
          <div className="mb-4">
            <label htmlFor="image" className="block text-gray-700 font-bold mb-2">Image</label>
            <Field name="image" className="border rounded-md border-black p-2 w-full" />
            {errors.image && touched.image && <div className="text-red-500">{errors.image}</div>}
          </div>
          <div className="mb-4">
            <label htmlFor="para1" className="block text-gray-700 font-bold mb-2">Paragraph 1</label>
            <Field name="para1" className="border rounded-md border-black p-2 w-full" />
            {errors.para1 && touched.para1 && <div className="text-red-500">{errors.para1}</div>}
          </div>
          <div className="mb-4">
            <label htmlFor="para2" className="block text-gray-700 font-bold mb-2">Paragraph 2</label>
            <Field name="para2" className="border rounded-md border-black p-2 w-full" />
            {errors.para2 && touched.para2 && <div className="text-red-500">{errors.para2}</div>}
          </div>
          <div className="mb-4">
            <label htmlFor="para3" className="block text-gray-700 font-bold mb-2">Paragraph 3</label>
            <Field name="para3" className="border rounded-md border-black p-2 w-full" />
            {errors.para3 && touched.para3 && <div className="text-red-500">{errors.para3}</div>}
          </div>
          <button type="submit" className="border rounded-lg bg-blue-800 text-white py-2 px-4">Submit</button>
        </Form>
      )}
    </Formik>
  </div>
);

export default CreateBlog;
