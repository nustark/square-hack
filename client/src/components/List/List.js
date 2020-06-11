import React, { Component } from 'react';
import Box from '../Box/Box';
import './List.css';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = { orders: [] };
  }

  componentDidMount() {
    this.getOrders();
  }

  getOrders() {
    fetch("http://localhost:9000/square")
      .then(res => res.json())
      .then(data => {
        console.log(data.orders);
        this.setState({ orders: data.orders });
      });

    // fetch("http://localhost:9000/square")
    //   .then(res => res.text())
    //   .then(res => {
    //     var orderNames = res.orders.map(order => {
    //       return order.line_items[0].uid;
    //     });
    //     this.setState({ orders: orderNames });
    //   });
  }

  render() {
    return (
      <div className="wrapper">
        <Box orders={this.state.orders} />
        <br></br>
        <div className="clear">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer porttitor finibus rutrum. In hac habitasse platea dictumst. Aliquam erat volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam mollis lacus nec turpis euismod facilisis. Duis ac rhoncus nunc. Morbi nec turpis turpis. Donec mattis vitae eros nec vulputate. Duis pretium felis libero, eu lacinia mauris facilisis in.
          Suspendisse et aliquet lacus, sit amet pellentesque sapien. Quisque mollis mollis mattis. Quisque venenatis imperdiet ex quis placerat. Mauris neque metus, dapibus in tristique ac, malesuada non leo. Sed nunc enim, pellentesque vitae euismod congue, malesuada convallis erat. Ut urna dui, tempus quis tempus non, gravida sed orci. Ut dictum imperdiet diam at tincidunt. Phasellus sit amet venenatis tortor, sed tincidunt nisi. Maecenas nibh enim, laoreet ut sapien et, rhoncus faucibus mi. Suspendisse eget ullamcorper justo. Curabitur ipsum risus, tempor et fermentum vitae, ultrices id purus. Duis lobortis felis vel bibendum vulputate. 
        </div>
        <br></br>
        <div>
          Vivamus efficitur, quam ut posuere tincidunt, quam tellus euismod lorem, a cursus elit nulla ut massa. Maecenas molestie risus purus, ac vestibulum enim congue at. Duis ex purus, suscipit et leo in, dictum egestas velit. Aliquam pulvinar viverra est et sodales. Donec pellentesque sapien quis nisl ullamcorper, in feugiat velit mollis. Maecenas sed dapibus ligula. Pellentesque placerat lectus eu diam congue porttitor. Quisque ut nisi magna. Maecenas bibendum volutpat tempus. Aenean a neque eget sapien lacinia blandit.
          Maecenas faucibus fringilla dui in hendrerit. Nunc vitae eros tempus, dignissim metus nec, volutpat tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque blandit ligula lectus, vitae fermentum tortor elementum ut. Morbi sapien enim, ultrices et mattis sed, pulvinar non leo. Quisque sit amet consequat orci. Duis vitae ultricies enim, posuere finibus purus. Cras non tortor et dolor facilisis vestibulum id vel turpis. Nullam faucibus volutpat ligula vitae congue. 
        </div>
      </div>
    )
  }
}

export default List;