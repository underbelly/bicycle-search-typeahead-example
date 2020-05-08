import React from 'react';

import {withApollo} from '../lib/apollo';

import CompanySearch from '@views/CompanySearch';

const LandingPage = () => {
  return <CompanySearch />;
};

export default withApollo(LandingPage);
