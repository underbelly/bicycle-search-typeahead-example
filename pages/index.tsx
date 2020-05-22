import React from 'react';

import CompanySearch from '@views/CompanySearch';
import {withApollo} from '../lib/apollo';

const LandingPage = () => {
  return <CompanySearch />;
};

export default withApollo({ssr: true})(LandingPage);
