class S3 {
  constructor(data, parent){
    this.data = data;
    this.id = data.id;
    this.parent = parent;
  }

  getS3Object(){
    if(this.parent){
      return [
        {group: 'nodes', data: { id: this.id, label: "S3"}, classes: 's3'},
        { group: 'edges', data: { id: this.id+this.parent, source: this.parent, target: this.id}}
      ]
    }
    else{
      return {group: 'nodes', data: { id: this.id, label: "S3"}, classes: 's3'}
    }
    
  }

}

export default S3;