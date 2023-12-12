import { Box, Grid, Paper, Typography } from "@mui/material";
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import { useSelector } from "react-redux";
import { ReactComponent as ForYouChip } from "../../assets/images/for-you-chip.svg";
import LinearProgress from "@mui/material/LinearProgress";

export const formatPrice = (unitPrice, discount = 0) => {
  const value = (unitPrice - unitPrice * (discount / 100)).toFixed(2);
  // es-AR === languajeCulture
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
  }).format(value);
};

const Item = ({ product }) => {
  return (
    <Paper
      sx={{
        color: "#5A5956",
        borderRadius: "10px",
        marginX: "7px",
        marginY: "5px",
        height: "215px",
      }}
    >
      <Box sx={{ display: "flex", padding: "10px", height: "100%" }}>
        <Grid container justifyContent="space-between">
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Grid
              item
              sm={8}
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <ForYouChip />
              <Grid
                item
                sm={8}
                sx={{
                  display: "flex",
                  gap: "2px",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ color: "green.main", fontWeight: 600 }}
                >{`${
                  formatPrice(
                    product.unitPrice,
                    product.customerDiscount || product.storeDiscount
                  ).split(",")[0]
                }`}</Typography>
                <Typography
                  variant="subtitle2"
                  sx={{
                    color: "green.main",
                    fontWeight: 600,
                    textDecoration: "underline",
                  }}
                >{`${
                  formatPrice(
                    product.unitPrice,
                    product.customerDiscount || product.storeDiscount
                  ).split(",")[1]
                }`}</Typography>
              </Grid>
            </Grid>
            <Grid
              item
              sm={4}
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              {product.storeDiscount !== 0.0 && (
                <Box sx={{ display: "flex", gap: "1px" }}>
                  <Typography
                    variant="body1"
                    sx={{ textDecorationLine: "line-through" }}
                  >
                    {`${formatPrice(product.unitPrice).split(",")[0]}`}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{ textDecorationLine: "line-through" }}
                  >
                    {`${formatPrice(product.unitPrice).split(",")[1]}`}
                  </Typography>
                </Box>
              )}

              {/* <Typography variant="caption">{`${formatPrice(
                            product.unitPrice,
                            product.storeDiscount
                        )}`}</Typography> */}
            </Grid>
          </Box>
          <Grid
            item
            sm={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              margin: "2px auto",
            }}
          >
            <img src={product.image} alt="" width="95px" />
          </Grid>

          <Grid
            item
            sm={12}
            sx={{
              display: "block",
              height: "57px",
              width: "100%",
              textAlign: "center",
              borderTop: "1px solid #80808069",
              textOverflow: "ellipsis",
              overflow: "hidden",
              whiteSpace: "nowrap",
            }}
          >
            <Typography variant="subtitle1" sx={{ fontWeight: 800 }}>
              {product.name}
            </Typography>
            <Typography variant="caption">{product.description}</Typography>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};

const ProductsCarousel = () => {
  const {
    getProductsData: { results: products = [] },
    getProductsStatus,
  } = useSelector((state) => state.products);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  return (
    <>
      {getProductsStatus !== "succeeded" ? (
        <LinearProgress sx={{ width: "80%", m: "auto", my: "15px" }} />
      ) : (
        <Slider {...settings}>
          {products.map((product) => (
            <Item key={product.id} product={product} />
          ))}
        </Slider>
      )}
    </>
  );
};

export default ProductsCarousel;
