import React, {useRef, useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import GlobalContext from "../../../contexts/Global";

const useStyles = makeStyles({
  root: {
    width: 345,
    marginTop: 30,
  },
  media: {
    height: 140,
    backgroundSize: "contain",
  },
  title: {
    textAlign: "center",
  },
  button: {
    height: "100%",
  },
  price: {
    fontWeight: 700,
    letterSpacing: 0.8,
    color: "green",
    position: "absolute",
    bottom: "0%",
    left: "40%",
  },
  body: {
    marginBottom: "2rem",
    textAlign: "center",
  },
});

// const credentials = {
//   "sandbox": "AaGlyeFp21J8FXmYLf1SwGXFle5oy3pQYEceEqLfvd2YUrF-QctrstHkr9dSPnKqigLfZy0tgc_o90_y",
//   "production": "AVg5ruXKtT4HIuy7zO8ef9PZbEK3gj0n8KMvAMJuoWl_xlKZQ3ZyrOGXHjOB3S_3nmXPM6tqUFjQ2uk-"
// }

const PointsPackage = (props) => {
  const globalContext = React.useContext(GlobalContext);
  const classes = useStyles();
  const paypalRef = useRef();
  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            // custom: "steamidpole",
            purchase_units: [
              {
                description: props.title,
                custom_id: globalContext.user.profile.id,
                amount: {
                  currency: "USD",
                  value: props.price,
                },               
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          console.log(order);
        },
        onError: err => {
          console.error(err);
        },
        style: {
          layout: "vertical",
          color: "blue",
          label: "paypal",
          tagline: false,
          width: "75%",
          height: 25,
        },
        fundingSource: window.paypal.FUNDING.PAYPAL,
      })
      .render(paypalRef.current);
  }, [props.title, props.price]);

  return (
      <Card className={classes.root}>
      <CardActionArea className={classes.button}>
        <CardMedia
          className={classes.media}
          image={props.imgurl}
          title={props.imgtitle}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            className={classes.title}
          >
            {props.title}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component={props.element}
            className={classes.body}
          >
            {props.description}
            {props.price && (
              <h2 className={classes.price}>{props.price + "  PLN"}</h2>
            )}
            <div ref={paypalRef}></div> 
          </Typography>
          
        </CardContent>
        
      </CardActionArea>
      
      </Card>
  );
};

export default PointsPackage;
