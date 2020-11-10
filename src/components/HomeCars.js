import React from 'react'
import '../homecars.css'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useSnackbar } from 'notistack';

function HomeCars({ id, image, title, price, }) {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const { enqueueSnackbar } = useSnackbar();

    function handleClickVariant(variant) {
        enqueueSnackbar('Thank you for your feedback You will receive a email shortly', { variant });
      }

    return (
        <div className="homeCars">
            <img src={image} alt="1" /> 
            <div className="carInfo">
            <p>{title}</p>
 
            <p className="price">
                <small>ZAR</small>
                <strong>{price}</strong>
            </p>
            
            </div>
            
      <Button variant="contained" color="secondary" onClick={handleClickOpen}>
        Interested?
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Buy</DialogTitle>
        <DialogContent>
          <DialogContentText>
            If you are Interested in this car please enter your email here to get more details about this car
            and possibly a discount  
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address (Fake Email)"
            type="email"
            fullWidth
            color="secondary"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button  onClick={() => {handleClose(); handleClickVariant('success');}} color="secondary">
            Interested
          </Button>
        </DialogActions>
      </Dialog>
        </div>
    )
}

export default HomeCars
