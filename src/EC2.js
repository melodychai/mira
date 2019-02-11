class EC2 {
  constructor(data, parent, source){
    this.data = data;
    this.id = data.id;
    this.source = source;
    this.parent = parent;
  }

  getEC2Object(){
    return [
      {group: 'nodes', data: { id: this.id, parent:this.parent, label: "EC2"}, classes: 'temp'},
      { group: 'edges', data: { id: this.id+this.parent, source: this.source, target: this.id}}
    ]
  }

}

export default EC2;
