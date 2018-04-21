import React from 'react';
import PropTypes from 'prop-types';
import { PieChart, Pie } from 'recharts';
import { Segment, Header, Grid, Column } from 'semantic-ui-react';
import './style.scss';
import { ResponsivePie } from '@nivo/pie';

class GreenprintEmissionsReduction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
    this.formatData = this.formatData.bind(this);
  }

  componentDidMount() {
    this.formatData();

  }

  render() {
    /*return (
      <div className='GreenprintEmissionsReduction'>
        <Segment attached className='GreenprintEmissionsReduction_Segment'>
          <div>
            <div>
              <Header textAlign='center' className='GreenprintEmissionsReduction_Segment_Header' as='h2'>GreenPrint Emissions Reductions</Header>
            </div>
            <div>
              <Header textAlign='center' className="GreenprintEmissionsReduction_Segment_Header" as='h5'>2015 Targets: 2.1 million metric tons of CO2e**</Header>
            </div>
            <div>
              <Header textAlign='center' className="GreenprintEmissionsReduction_Segment_Header" as='h5'>(including 670,000 metric tons of CO2e from new CAFE* standars)</Header>
            </div>
          </div>
          <div>
            <Grid centered columns={2}>
              <Grid.Column>
                <PieChart width={800} height={400}>
                  <Pie isAnimationActive={false} data={this.state.data} cx={200} cy={200} outerRadius={80} fill="#00b3a4" label={(item) => `${item.name}: ${item.value}`} />
                </PieChart>
              </Grid.Column>
            </Grid>
          </div>
        </Segment>
        <Segment attached inverted color='grey'>
          <p>
            *Corporate Average Fuel Economy (CAFE) Standars are gas mileage standars (in miles per gallon or MPG) for a manufacturer's passenger cards and light trucks sold in United States for a given model year. The purpose of CAFE is to reduce energy consumption by increasing the fuel economy of cars and light trucks. These standars, set by the federal government, were last undated in August 2012.
          </p>
          <p>
            **Carbon Dioxide Equivalents(CO2e)
          </p>
        </Segment>
      </div>
    );*/
    return (
      <div className='GreenprintEmissionsReduction'>
        <Segment attached className='GreenprintEmissionsReduction_Segment'>
          <div>
            <div>
              <Header textAlign='center' className='GreenprintEmissionsReduction_Segment_Header' as='h2'>GreenPrint Emissions Reductions</Header>
            </div>
            <div>
              <Header textAlign='center' className="GreenprintEmissionsReduction_Segment_Header" as='h5'>2015 Targets: 2.1 million metric tons of CO2e**</Header>
            </div>
            <div>
              <Header textAlign='center' className="GreenprintEmissionsReduction_Segment_Header" as='h5'>(including 670,000 metric tons of CO2e from new CAFE* standars)</Header>
            </div>
          </div>
          <div className="GreenprintEmissionsReduction_Chart">
            <ResponsivePie
              data={this.state.data}
              margin={{
                "top": 40,
                "right": 80,
                "bottom": 80,
                "left": 80
              }}
              padAngle={0.7}
              cornerRadius={0}
              colors="accent"
              colorBy="id"
              borderColor="inherit:darker(0.6)"
              radialLabelsSkipAngle={0}
              radialLabelsTextXOffset={6}
              radialLabelsTextColor="#333333"
              radialLabelsLinkOffset={0}
              radialLabelsLinkDiagonalLength={20}
              radialLabelsLinkHorizontalLength={24}
              radialLabelsLinkStrokeWidth={1}
              radialLabelsLinkColor="inherit"
              slicesLabelsSkipAngle={10}
              slicesLabelsTextColor="#333333"
              animate={true}
              motionStiffness={90}
              motionDamping={15}
              legends={[]}
            />
          </div>
        </Segment>
        <Segment attached inverted color='grey'>
          <p>
            *Corporate Average Fuel Economy (CAFE) Standars are gas mileage standars (in miles per gallon or MPG) for a manufacturer's passenger cards and light trucks sold in United States for a given model year. The purpose of CAFE is to reduce energy consumption by increasing the fuel economy of cars and light trucks. These standars, set by the federal government, were last undated in August 2012.
          </p>
          <p>
            **Carbon Dioxide Equivalents(CO2e)
          </p>
        </Segment>
      </div>
    );
  }

  formatData() {
    let data = this.props.data.map(item => {
      return { ...item, label: item.name, id: item.name }
    });
    this.setState({ data: data });
  }
}

export default GreenprintEmissionsReduction;
