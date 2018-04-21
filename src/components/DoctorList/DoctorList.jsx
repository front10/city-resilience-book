import React from 'react';
import { Card, Icon, Header, Button, Image, Divider, Feed } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import matthewImageFile from '../../../assets/images/avatar/small/matthew.png';
import './style.scss';


class DoctorList extends React.Component {
  constructor(props) {
    super(props);
  }
  renderDoctor(doctor, i) {
    return <Card>
      <Image src={matthewImageFile} />
      <Card.Content>
        <Card.Header>
          {`${doctor.firstName} ${doctor.lastName}, ${doctor.title} `}
        </Card.Header>
        <Card.Meta>
          <span className="date">
            {`${doctor.age} years old`}
        </span>
        </Card.Meta>
        <Card.Description>
          {doctor.detail}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name="star" />
          {`${doctor.rating} stars`}
      </a>
      </Card.Content>
    </Card>
  }
  render() {
    const { doctorList = [] } = this.props;
    return (doctorList.length > 0) ?
      <div>
        {
          doctorList.map(this.renderDoctor)
        }
      </div> : <h1> Don't exist doctors</h1>;
  }
}

DoctorList.propTypes = {
  doctorList: PropTypes.array,
};

DoctorList.defaultProps = {
  doctorList: [],
};

export default DoctorList;
