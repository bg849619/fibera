class NetworkComponent {
    constructor(object) {
        this.id = object.id;
        this.type = object.type;

        if(this.id === undefined || !this.type)
            throw("Network Components must have an id and type.");
    }
}

export default NetworkComponent;