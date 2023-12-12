import { Box, Chip, Paper, Typography } from "@mui/material";
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import LinearProgress from "@mui/material/LinearProgress";
import { useSelector } from "react-redux";

export const formatPrice = (unitPrice, discount = 0) => {
  const value = (unitPrice - unitPrice * (discount / 100)).toFixed(2);
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
  }).format(value);
};

const Item = ({ product }) => {
  return (
    <Paper
      sx={{
        height: "290px",
        minWidth: "290px",
        borderRadius: "10px",
        color: "#FFF",
        marginX: "5px",
        marginY: "5px",
        flexDirection: "row",
        display: "flex",
      }}
    >
      <Box
        sx={{
          maxHeight: "290px",
          height: "100%",
          width: "55%",
          backgroundColor: "#446BB2",
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box sx={{ padding: "10px", flex: 2 }}>
          {product.storeDiscount ? (
            <Chip
              label={`${product.storeDiscount}% OFF`}
              sx={{ backgroundColor: "green.main", color: "#FFF" }}
            />
          ) : null}
          <Typography variant="h5" sx={{ fontWeight: 800 }}>
            {product.name}
          </Typography>
          <Typography variant="body1" display="block">
            {product.description}
          </Typography>
          {product.storeDiscount !== 0.0 && (
            <Box sx={{ display: "flex", gap: "2px" }}>
              {/* <Typography
                variant="body2"
                sx={{ textDecorationLine: "line-through" }}
              >
                {`${formatPrice(product.unitPrice)}`}
              </Typography> */}
              <Typography
                variant="body1"
                sx={{ textDecorationLine: "line-through" }}
              >
                {`${formatPrice(product.unitPrice).split(",")[0]} `}
              </Typography>
              <Typography
                variant="caption"
                sx={{ textDecorationLine: "line-through" }}
              >
                {`${formatPrice(product.unitPrice).split(",")[1]}`}
              </Typography>
            </Box>
          )}

          {/* <Typography
                        variant="caption"
                        display="block"
                        marginTop="20px"
                    >
                        Promo Tienda
                    </Typography>
                    <Typography variant="caption">{`${formatPrice(
                        product.unitPrice,
                        product.storeDiscount
                    )}`}</Typography> */}
        </Box>
        <Box
          sx={{
            backgroundColor: "pink.main",
            borderRadius: "0 60px 10px 10px",
            padding: "10px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            flex: 1,
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Promo
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ marginTop: "-10px", fontWeight: 500 }}
          >
            {product.customerName}
          </Typography>
          {/* <Typography variant="h4" sx={{ fontWeight: 800 }}>
            {`${formatPrice(product.unitPrice, product.storeDiscount)} `}
          </Typography> */}
          <Box
            sx={{
              display: "flex",
              gap: "2px",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: 800,
                fontSize: "36px",
                whiteSpace: "nowrap",
                wordSpacing: "-0.5rem",
              }}
            >
              {`${
                formatPrice(product.unitPrice, product.storeDiscount).split(
                  ","
                )[0]
              } `}
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{
                fontWeight: 800,
                textDecoration: "underline",
                fontSize: "14px",
                whiteSpace: "nowrap",
              }}
            >
              {`${
                formatPrice(product.unitPrice, product.storeDiscount).split(
                  ","
                )[1]
              }`}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          height: "100%",
          width: "45%",
          backgroundImage: `url('${product.image}')`,
          backgroundSize: "cover",
          backgroundPositionY: "center",
          backgroundPositionX: "center",
          backgroundRepeat: "no-repeat",
          color: "#FFF",
          borderRadius: "10px",
        }}
      ></Box>
    </Paper>
  );
};

const PromoCarousel = () => {
  const {
    getProductsPromoData: { results: promos = [] },
    getProductsPromoStatus,
  } = useSelector((state) => state.products);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
  };
  return (
    <>
      {getProductsPromoStatus !== "succeeded" ? (
        <LinearProgress sx={{ width: "80%", m: "auto", my: "15px" }} />
      ) : (
        <Slider {...settings}>
          {promos.map((product) => (
            <Item key={product.id} product={product} />
          ))}
        </Slider>
      )}
    </>
  );
};

export default PromoCarousel;
