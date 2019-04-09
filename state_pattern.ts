interface State {
    order: Order;

    cancelOrder(): void;
    verifyPayment(): void;
    shipOrder(): void;
}

class Order {
    public currentState: State;
    public cancelledOrderState: State;
    public paymentPendingState: State;
    public orderShippedState: State;
    public orderBeingPreparedState: State;
    
    constructor() {
        this.cancelledOrderState = new CancelOrderState(this);
        this.paymentPendingState = new PaymentPendingState(this);
        this.orderShippedState = new OrderShippedState(this);
        this.orderBeingPreparedState = new OrderBeingPreparedState(this);

        this.setState(this.paymentPendingState);
    }

    public setState(state: State): void {
        this.currentState = state;
    }

    public getState(): State {
        return this.currentState;
    }
}

class PaymentPendingState implements State {
    constructor(public order: Order) {
    }
    cancelOrder(): void {
        console.log(`Cancelling your unpaid order...`);
        this.order.setState(this.order.cancelledOrderState);
    }
    verifyPayment(): void {
        console.log(`Payment verified shipping soon`);
        this.order.setState(this.order.orderBeingPreparedState);
    }
    shipOrder(): void {
        console.log(`Cannot ship the order when payment is pending`);
    }
}

class CancelOrderState implements State {
    constructor(public order: Order) {
    }
    
    cancelOrder(): void {
        console.log(`Your order is already cancelled`);
    }
    verifyPayment(): void {
        console.log(`Order cancelled`);
    }
    shipOrder(): void {
        console.log(`Order cancel it was cancelled`);
    }

}

class OrderBeingPreparedState implements State {
    constructor(public order: Order) {
    }
    
    cancelOrder(): void {
        console.log(`Cancelling the order`);
        this.order.setState(this.order.cancelledOrderState);
    }

    verifyPayment(): void {
        console.log(`Already verified your payment`);
    }
    shipOrder(): void {
        console.log(`Shipping your order now`);
        this.order.setState(this.order.orderShippedState);
    }

}

class OrderShippedState implements State {
    constructor(public order: Order) {
    }
    
    cancelOrder(): void {
        console.log('Already shipped, You cannot cancel the order now');
    }
    verifyPayment(): void {
        console.log('Cannot verify payment, because it already shipped');
    }
    shipOrder(): void {
        console.log('Cannot ship your order again, because it already shipped');
    }

}

let order: Order = new Order();
console.log(`Order state: ${(<any> order.getState()).constructor.name}`);
