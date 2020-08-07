
import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

export default function MetaTag(props) {
  return (
    <Helmet>
      <meta charSet='utf-8' />
      <title>
        {`Nathan STAMPFLI | ${props.metatagPage}`}
      </title>
      <meta name='description' content='Nested component' />
    </Helmet>
  );
}

MetaTag.propTypes = {
  metatagPage: PropTypes.string
};