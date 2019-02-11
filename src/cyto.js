import React,{Component} from 'react';
import cytoscape from 'cytoscape';
import './App.css';
import EC2 from './EC2'
import S3 from './S3'
import cola from 'cytoscape-cola';

cytoscape.use( cola );

class Cyto extends Component{
  constructor(props){
    super(props);
    this.renderElement = this.renderElement.bind(this);
    this.cy = null;
    this.nodes = {};
  }
  renderElement(){
    this.cy = cytoscape({
      container: document.getElementById('cy'),
    
      boxSelectionEnabled: false,
      autounselectify: true,

      style: cytoscape.stylesheet()
        .selector('node')
          .css({
            'height': 80,
            'width': 80,
            'background-fit': 'cover',
            'border-color': '#000',
            'border-width': 3,
            'border-opacity': 0.5,
            'text-halign': 'center',
            'text-valign': 'center',
            // 'width': 'label',
            // 'height': 'label',
            'label': 'data(label)'


          })
        .selector(':parent')
          .css({
            'font-weight': 'bold',
            'background-opacity': 0.075,
            'content': 'data(label)',
            'text-valign': 'top',
          })
          .selector('edge')
          .css({
            'curve-style': 'bezier',
            'width': 6,
            'target-arrow-shape': 'triangle',
            'line-color': '#ffaaaa',
            'target-arrow-color': '#ffaaaa'
          })
          .selector('.EC2')
          .css({
            'background-image': 'https://farm4.staticflickr.com/3063/2751740612_af11fb090b_b.jpg'
          })
        });
      this.cy.add(new EC2({id:0}, null , null).getEC2Object());
      this.cy.add(new EC2({id:1}, 0 , null).getEC2Object());
      this.cy.add(new EC2({id:2}, 0, 1).getEC2Object());
      this.cy.add(new EC2({id:4}, 0, 2).getEC2Object());
      this.cy.add(new EC2({id:5}, null, 4 ).getEC2Object());
      this.cy.add(new S3({id: 3},null).getS3Object());
      
        // const data = [
        //     {type:"EC2", id: 123, parent: null},
        //     {type: "EC2", id: 124, parent: 123},
        //     {type: "S3", id: 125, parent: 123},
        //     {type: "S3", id: 126, parent: 124}
        //   ];
        //   for(let i = 0; i < data.length; i++ ){
        //     let {type, _id, parent} = data[i];
        //     console.log(parent)
        //     if(type === "EC2"){
        //       if(parent) this.cy.add(new EC2({id: _id}, parent).getEC2Object());
        //       else this.cy.add(new EC2({id: _id}).getEC2Object());
        //     }
        //     else if (type === "S3"){
        //       if(parent)this.cy.add(new S3({id: _id}, parent).getS3Object());
        //       else this.cy.add(new S3({id: _id}).getS3Object());
              
        //     }
        //   }

        this.cy.on('tap', 'node', function (evt){
          console.log("The id of the node clicked is ", this.id());
        })
      }

      componentDidMount(){
        this.renderElement();
        // 
        this.cy.layout({name: 'cola', flow: { axis: 'y', minSeparation: 40}, avoidOverlap: true}).run();
      }

      render(){
        return(
            <div className="node_selected">
                <div id="cy"></div>
            </div>
        )
    }
          
};

export default Cyto;