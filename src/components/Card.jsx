import {
  Card,
  CardContent,
  Typography,
  Button,
  CardActions,
  CardMedia,
} from "@mui/material";
import Image1 from "../assets/web.jpg";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

const CardComponent = (props) => {
  const { service, addToCart, selectedItems, removeFromCart } = props;
  const isSelected = selectedItems.some((item) => item.id === service.id);
  return (
    <Card sx={{ maxWidth: 345, marginBottom: 2 }}>
      <CardMedia sx={{ height: 140 }} image={Image1} title="green iguana" />
      <CardContent>
        <Typography gutterBottom sx={{ color: "text.secondary", fontSize: 14 }}>
          Course: {service.title}
        </Typography>
        <Typography
          variant="h6"
          component="div"
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <CurrencyRupeeIcon /> {service.price}
        </Typography>
      </CardContent>
      <CardActions>
        {isSelected ? (
          <Button
            variant="contained"
            size="small"
            onClick={() => removeFromCart(service)}
            sx={{
              boxShadow: "none",
              backgroundColor: "error.main",
            }}
          >
            Remove
          </Button>
        ) : (
          <Button
            size="small"
            variant="contained"
            onClick={() => addToCart(service)}
            bgColor="primary.main"
            sx={{
              boxShadow: "none",
            }}
          >
            Buy Now
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default CardComponent;
