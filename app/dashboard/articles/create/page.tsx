"use client";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export default function CreateArticlePage() {
  return (
    <div className="max-w-lg mx-auto space-y-4">
      <h1 className="text-2xl font-bold">Create Article</h1>

      <TextField label="Title" variant="outlined" fullWidth />

      <TextField
        label="Content"
        variant="outlined"
        fullWidth
        multiline
        rows={4}
      />

      <Button variant="contained" color="primary">
        Create Article
      </Button>
    </div>
  );
}