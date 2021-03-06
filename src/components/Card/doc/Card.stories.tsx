import React from 'react';
import {
 Box, Button, Heading, Image, Text,
} from 'grommet';
import { Add, Bitcoin, Edit } from 'grommet-icons';
import { Card } from '../Card';
import { ImageStamp } from '../../ImageStamp';


export default {
  title: 'CONTROLS/controls/Card',
  component: Card,
};

const actions = [
  {
    label: 'Edit',
    icon: <Edit />,
    onClick: () => {},
  }, {
    label: 'New',
    icon: <Add />,
    onClick: () => {},
  },
];
export const main = ({
 border, align, direction, pad, imageStamp, title, level, fit, image, height,
}) => (
  <Card>
    <Card.CardTitle border={border} align={align} direction={direction} pad={pad}>
      <Box direction='row'>
        <ImageStamp {...imageStamp} />
        <Heading level={level} margin='xsmall'>{title}</Heading>
      </Box>
      <Box direction='row'>
        <Bitcoin color='plain' />
        <Text>sub-title info</Text>
      </Box>
    </Card.CardTitle>
    <Card.CardContent>
      {console.log(image)}
      <Image fit={fit} src={image} height={`${height}`} />
    </Card.CardContent>
    <Card.CardActions justify='center'>
      {actions.map((action, index) => (<Button key={`actions_${index}`} label={action.label} onClick={action.onClick} />))}
    </Card.CardActions>

  </Card>
);

main.story = {
  parameters: {
    controls: {
      border: {
        type: 'object',
        value: {
          color: {
            type: 'color', value: '#333',
          },
          size: {
            type: 'options', options: ['xsmall', 'small', 'medium', 'large', 'xlarge'],

          },
          side: {
            type: 'options', options: ['top', 'left', 'bottom', 'right', 'horizontal', 'vertical', 'all'], value: 'bottom',
          },
        },
        groupId: 'Card.CardTitle',
      },
      align: {
        type: 'options', options: ['start', 'center', 'end', 'baseline', 'stretch'], value: 'center', groupId: 'Card.CardTitle',
      },
      direction: {
        type: 'options', options: ['row', 'column', 'row-responsive', 'row-reverse', 'column-reverse'], value: 'column', groupId: 'Card.CardTitle',
      },
      pad: {
        type: 'options', options: ['none', 'xxsmall', 'xsmall', 'small', 'medium', 'large', 'xlarge'], value: 'small', groupId: 'Card.CardTitle',
      },

      imageStamp: {
        type: 'object',
        value: {
          src: { type: 'text', value: 'https://s3.amazonaws.com/uifaces/faces/twitter/shadeed9/128.jpg' },
          round: { type: 'options', options: ['xsmall', 'small', 'medium', 'large', 'full'], value: 'full' },
        },
        groupId: 'Heading',
      },
      title: {
        type: 'text',
        value: 'Info card',
        groupId: 'Heading',
      },
      level: {
        type: 'number',
        value: 3,
        min: 1,
        max: 5,
        groupId: 'Heading',
      },
      fit: {
        type: 'options',
        value: 'cover',
        options: ['cover', 'contain'],
        groupId: 'Content',
        display: 'inline-radio',
      },
      image: {
        type: 'text', value: 'https://s3.amazonaws.com/uifaces/faces/twitter/denisepires/128.jpg', groupId: 'Content', data: { name: 'internet.avatar' },
      },
      height: {
        type: 'number',
        value: 250,
        min: 100,
        max: 900,
        step: 50,
        range: true,
        groupId: 'Content',
      },
    },
  },
};
export const animation = () => (
  <Card
    animation={{
      type: 'zoomIn', duration: 5000, size: 'xlarge',
    }}
  >
    <Card.CardTitle border='bottom'>
      Card
    </Card.CardTitle>
    <Card.CardContent>
      <Image fit='cover' src='//v2.grommet.io/assets/Wilderpeople_Ricky.jpg' height='250' />
    </Card.CardContent>
  </Card>
);
export const background = () => (
  <Card
    background='accent-1'
  >
    <Card.CardTitle border='bottom'>
      Card
    </Card.CardTitle>
    <Card.CardContent
      basis='small'
    >
      Card content
    </Card.CardContent>
  </Card>
);
export const border = () => (
  <Card
    border={{
      color: 'brand', size: 'medium',
    }}
  >
    <Card.CardTitle border='bottom'>
      Card
    </Card.CardTitle>
    <Card.CardContent
      basis='small'
    >
      Card content
    </Card.CardContent>
  </Card>
);
export const elevation = () => (
  <Card
    elevation='large'
  >
    <Card.CardTitle border='bottom'>
      Card
    </Card.CardTitle>
    <Card.CardContent
      basis='small'
    >
      Card content
    </Card.CardContent>
  </Card>
);
export const gap = () => (
  <Card
    gap='medium'
  >
    <Card.CardTitle border='bottom'>
      Card
    </Card.CardTitle>
    <Card.CardContent
      basis='small'
    >
      Card content
    </Card.CardContent>
  </Card>
);
export const pad = () => (
  <Card
    pad='medium'
  >
    <Card.CardTitle border='bottom'>
      Card
    </Card.CardTitle>
    <Card.CardContent
      basis='small'
    >
      Card content
    </Card.CardContent>
  </Card>
);
export const round = () => (
  <Card round='medium' pad='small'>
    <Card.CardTitle border='bottom'>
      Card
    </Card.CardTitle>
    <Card.CardContent
      basis='small'
    >
      Card content
    </Card.CardContent>
  </Card>
);
