import React from 'react';

import BicycleSearch from '@views/BicycleSearch';
import {withApollo} from '../lib/apollo';

const LandingPage = () => {
  return <BicycleSearch />;
};

export default withApollo({ssr: true})(LandingPage);
