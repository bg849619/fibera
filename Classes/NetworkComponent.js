class NetworkComponent {
    constructor(json) {
        let outputObject = JSON.parse(json);
        this.id = outputObject.id;
        this.type = outputObject.type;

        if(this.id === undefined || !this.type)
            throw("Network Components must have an id and type.");
    }

    toJson() {
        return JSON.stringify({
            id: this.id,
            type: this.type
        });
    }
}