import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

export default function FormDialog({ open, setOpen }) {
  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Tahrirlash</DialogTitle>
      <DialogContent>
        <form
          style={{ display: "flex", gap: "20px", flexDirection: "column" }}
          onSubmit={handleSubmit}
        >
          <TextField
            required
            name="name"
            label="Name"
            fullWidth
            variant="standard"
          />
          <TextField
            required
            fullWidth
            defaultValue="2018-07-22"
            name="date"
            type="date"

            variant="standard"
          />
          <TextField
            required
            fullWidth
            name="location"
            label="Location"
            variant="standard"
          />
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit">Subscribe</Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
}
