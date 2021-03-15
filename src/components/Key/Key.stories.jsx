import React from 'react';

import Key from './Key';

const KeyStory = {
	title: 'Key',
	component: Key,
};

// eslint-disable-next-line react/jsx-props-no-spreading
const Template = (args) => <Key {...args} />;

export const Example = Template.bind({});
export default KeyStory;
