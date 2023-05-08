import React from 'react';
import { Grid } from 'semantic-ui-react';
import { UniversalLink } from '@plone/volto/components';
import moment from 'moment';

const EventListing = ({ items }) => {
  console.log(items);
  return (
    <Grid columns={3}>
      <Grid.Column width={12} className="listing-col">
        <Grid columns={2}>
          {items.map((item) => {
            var imgSrc = '';
            if (item.image_field != '') {
              imgSrc = item['@id'] + '/' + item.image_scales.preview_image[0].scales.mini.download;
            }
            return (
              <Grid.Column width={5} style={{ margin: '20px 20px' }}>
                <UniversalLink href={item['@id']}>
                  <div style={{ boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)', borderRadius: '8px' }}>
                    <div className="item-body">
                      <img width={'100%'} src={imgSrc != '' ? imgSrc : 'https://picsum.photos/600/400'} alt="" srcset="" />

                      <div style={{ padding: '20px 20px' }}>
                        <h3>{item.title}</h3>
                        <div className="date">{moment(item.start).format('MMMM D, YYYY')}</div>

                        <p className="location">{item.location}</p>
                      </div>
                    </div>
                  </div>
                </UniversalLink>
              </Grid.Column>
            );
          })}
        </Grid>
      </Grid.Column>
    </Grid>
  );
};

export default EventListing;
