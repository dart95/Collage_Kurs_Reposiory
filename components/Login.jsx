export default function () {
  return alert("hello");
}
<Dialog open={open} onClose={Loginclose} aria-labelledby="form-dialig-title">
  <DialogTittle id="form-dialig-title">Login</DialogTittle>
  <DialogContent>
    <DialogContentText>Log in to see videos</DialogContentText>
    <TextField
      autoFocus
      margin="dense"
      id="name"
      label="email"
      type="email"
      fullWidth
    />
    <TextField
      autoFocus
      margin="dense"
      id="password"
      label="Password"
      type="password"
      fullWidth
    />
  </DialogContent>
  <DialogActions>
    <Button onClick={Loginclose} color="primary">
      Cancel
    </Button>
    <Button onClick={Loginclose} color="primary">
      Log in
    </Button>
  </DialogActions>
</Dialog>;
