

function takeOrder(order, deliveryOrders){
  //for (var i = 0; i < deliveryOrders.length; i++){
if (deliveryOrders.length <= 2){
  return deliveryOrders.push(order)
//}
  }
  else {
    return
  }
}

function refundOrder(orderNum, orderList){
  for (var i = 0; i < orderList.length; i++){

  if (orderList[i].orderNumber === orderNum) {
    return orderList.splice(i,1)
  }
  }
}

function listItems(orderList){
  var tempList = []
  for (var i = 0; i < orderList.length; i++){
    tempList.push(orderList[i].item)

    //orderList[i].item
  }

return tempList.join(", ")
}

function searchOrder(orders, food){
  var tempList = []
  for (var i = 0; i < orders.length; i++){
    tempList.push(orders[i].item)
  }

    if (tempList.includes(food)){
      return true
    }
    else {
      return false
    }


}

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
