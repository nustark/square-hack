import React, { Component } from 'react';
import './Box.css';

// import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';

// const useStyles = makeStyles({
//   root: {
//     minWidth: 275,
//     maxWidth: 275
//   },
//   bullet: {
//     display: 'inline-block',
//     margin: '0 2px',
//     transform: 'scale(0.8)',
//   },
//   title: {
//     fontSize: 14,
//   },
//   pos: {
//     marginBottom: 12,
//   },
// });

// export default function Box() {
//   const classes = useStyles();
//   const bull = <span className={classes.bullet}>•</span>;

//   return (
//     <Card className={classes.root}>
//       <CardContent>
//         <Typography className={classes.title} color="textSecondary" gutterBottom>
//           Word of the Day
//         </Typography>
//         <Typography variant="h5" component="h2">
//           be{bull}nev{bull}o{bull}lent
//         </Typography>
//         <Typography className={classes.pos} color="textSecondary">
//           adjective
//         </Typography>
//         <Typography variant="body2" component="p">
//           well meaning and kindly.
//           <br />
//           {'"a benevolent smile"'}
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button size="small">Learn More</Button>
//       </CardActions>
//     </Card>
//   );
// }

class Box extends Component {
  render() {
    return (
      <div> 
        { this.props.orders.map((order) => {
          return (

            // <div className="card" key={order.id}>
            //   {order.line_items[0].name}
            // </div>

            <div className="card">
              <img class="card-img-top" src="https://i.postimg.cc/SNgHvsPC/hamburger-1.jpg" alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title">{ order.id }</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <p class="card-text">{ order.line_items[0].name }</p>
                {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
              </div>
            </div>
          )
        })}
      </div>
    )
}
}

export default Box;