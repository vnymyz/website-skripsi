import React, { useEffect, useState } from "react";
import { Box, Button, Paper, Typography } from "@mui/material";
import { DataGrid, gridClasses } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import moment from "moment";
import axios from "axios";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const AdminDashboard = () => {
  const [posts, setPosts] = useState([]);
  const { user } = useSelector((state) => state.userProfile);
  const [selectedKategori, setSelectedKategori] = useState("");
  const [kategoriList, setKategoriList] = useState([]);

  // const untuk kategori
  const fetchKategoriList = async () => {
    try {
      const { data } = await axios.get("/api/kategori/show");
      setKategoriList(data.kategori);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchKategoriList();
  }, []);

  const displayPost = async () => {
    try {
      const { data } = await axios.get("/api/post/show");
      setPosts(data.posts);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    displayPost();
  }, []);

  //delete post by Id
  const deletePostById = async (e, id) => {
    // console.log(id)
    if (window.confirm("Apa anda yakin ingin menghapus?")) {
      try {
        const { data } = await axios.delete(`/api/delete/post/${id}`);
        if (data.success === true) {
          toast.success(data.message);
          displayPost();
        }
      } catch (error) {
        console.log(error);
        toast.error(error);
      }
    }
  };

  const columns = [
    {
      field: "_id",
      headerName: "ID",
      width: 150,
      editable: true,
    },
    {
      field: "title",
      headerName: "Nama Judul",
      width: 150,
    },

    {
      field: "kategori",
      headerName: "Kategori",
      width: 150,
      valueGetter: (params) => {
        const selectedKategori = kategoriList.find(
          (kategori) => kategori._id == params.row.kategoriId
        );
        return selectedKategori ? selectedKategori.namakat : "N/A";
      },
    },

    {
      field: "image",
      headerName: "Gambar",
      width: 150,
      renderCell: (params) => <img width="40%" src={params.row.image.url} />,
    },
    {
      field: "likes",
      headerName: "Suka",
      width: 150,
      renderCell: (params) => params.row.likes.length,
    },
    {
      field: "comments",
      headerName: "Komentar",
      width: 150,
      renderCell: (params) => params.row.comments.length,
    },
    {
      field: "postedBy",
      headerName: "Dibuat oleh",
      width: 150,
      valueGetter: (data) => data.row.postedBy.name,
    },
    {
      field: "createdAt",
      headerName: "Tanggal Input",
      width: 150,
      renderCell: (params) =>
        moment(params.row.createdAt).format("YYYY-MM-DD HH:MM:SS"),
    },

    {
      field: "Aksi",
      width: 100,
      renderCell: (value) => (
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "170px",
          }}
        >
          <Link to={`/admin/post/edit/${value.row._id}`}>
            <IconButton aria-label="edit">
              <EditIcon sx={{ color: "#1976d2" }} />
            </IconButton>
          </Link>
          <IconButton
            aria-label="delete"
            onClick={(e) => deletePostById(e, value.row._id)}
          >
            <DeleteIcon sx={{ color: "red" }} />
          </IconButton>
        </Box>
      ),
    },
  ];

  return (
    <Box>
      <h1>Halo Admin {user && user.name} !</h1>
      <Typography variant="h4" sx={{ color: "black", pb: 3 }}>
        Mengelola Kucing
      </Typography>
      <Box sx={{ pb: 2, display: "flex", justifyContent: "right" }}>
        <Button variant="contained" color="success" startIcon={<AddIcon />}>
          <Link
            style={{ color: "white", textDecoration: "none" }}
            to="/admin/post/create"
          >
            Tambah Data
          </Link>{" "}
        </Button>
      </Box>
      <Paper sx={{ bgcolor: "white" }}>
        <Box sx={{ height: 400, width: "100%" }}>
          <DataGrid
            getRowId={(row) => row._id}
            sx={{
              "& .MuiTablePagination-displayedRows": {
                color: "black",
              },
              color: "black",
              [`& .${gridClasses.row}`]: {
                bgcolor: "white",
              },
            }}
            rows={posts}
            columns={columns}
            pageSize={3}
            rowsPerPageOptions={[3]}
            checkboxSelection
          />
        </Box>
      </Paper>
    </Box>
  );
};

export default AdminDashboard;
