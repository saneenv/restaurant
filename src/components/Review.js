import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';

function Review({reviewData}) {
    const [open, setOpen] = useState(false);
  return (
    <div>
        <Button className='mt-3'
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        See Reviews
      </Button>
      <div style={{ minHeight: '150px' }}>
        <Collapse in={open} dimension="width">
          <div id="example-collapse-text">
            {
                reviewData.map(item=>

                    <div className='p-2 mt-1'>
                                  <h3>{item.name} {item.date}</h3>
                                  <h6>{item.rating} </h6>
                                  <p>{item.comments}</p>

            
                    </div>

                )
            }
           
          </div>
        </Collapse>
      </div>
    </div>
  )
}

export default Review

