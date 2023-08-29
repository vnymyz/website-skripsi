import { Box, Button, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";

const validationSchema = yup.object({
  namakat: yup.string().required("Nama kategori tidak boleh kosong"),
  jenis: yup.string().required("Jenis kategori tidak boleh kosong"),
});

const CreateKategori = () => {
  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues: {
      namakat: "",
      jenis: "",
    },

    validationSchema: validationSchema,
    onSubmit: (values, actions) => {
      createNewKategori(values);
      //alert(JSON.stringify(values, null, 2));
      actions.resetForm();
    },
  });

  const createNewKategori = async (values) => {
    try {
      const { data } = await axios.post("/api/kategori/create", values);
      toast.success("Kategori berhasil disimpan");
    } catch (error) {
      console.log(error);
      toast.error(error);
    }
  };

  return (
    <>
      <Box sx={{ bgcolor: "white", padding: "20px 200px" }}>
        <Typography variant="h5" sx={{ pb: 4 }}>
          Tambah Kategori
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            sx={{ mb: 3 }}
            fullWidth
            id="namakat"
            label="Nama Kategori"
            name="namakat"
            InputLabelProps={{
              shrink: true,
            }}
            placeholder="Nama Kategori"
            value={values.namakat}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.namakat && Boolean(errors.namakat)}
            helperText={touched.namakat && errors.namakat}
          />

          <TextField
            sx={{ mb: 3 }}
            fullWidth
            id="jenis"
            label="Jenis Kategori"
            name="jenis"
            InputLabelProps={{
              shrink: true,
            }}
            placeholder="Jenis Kategori"
            value={values.jenis}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.jenis && Boolean(errors.jenis)}
            helperText={touched.jenis && errors.jenis}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            elevation={0}
            sx={{ mt: 3, p: 1, mb: 2, borderRadius: "25px" }}
          >
            Simpan Kategori
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default CreateKategori;
