import React, { useEffect, useState } from 'react';
import { Card, CardBody, CardFooter, CardHeader } from '@paljs/ui/Card';
import Row from '@paljs/ui/Row';
import Col from '@paljs/ui/Col';
import Layout from '../Layouts';
import ChartGauge from '../components/ChartGauge';

import styled from 'styled-components';


const Styles = styled.div`
  ${'' /* These styles are suggested for the table fill all available space in its containing element */}
  display: block;
  ${'' /* These styles are required for a horizontaly scrollable table overflow */}
  overflow: auto;

  table {
    border-spacing: 0;
    border: 1px solid #edf1f7;
    width:100%;
    thead {
      ${'' /* These styles are required for a scrollable body to align with the header properly */}
      overflow-y: auto;
      overflow-x: hidden;
    }

    tbody {
      ${'' /* These styles are required for a scrollable table body */}
      overflow-y: scroll;
      overflow-x: hidden;
    }

    tr {
      :last-child {
        .td {
          border-bottom: 0;
        }
      }
      border-bottom: 1px solid #edf1f7;
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-right: 1px solid #edf1f7;
      border-bottom: 1px solid #edf1f7;



      ${'' /* In this example we use an absolutely position resizer,
       so this is required. */}
      position: relative;

      :last-child {
        border-right: 0;
      }


    }
  }
`




  

const Home = () => {
  const [data22, updateData22] = useState(70);
  const [data1, updateData1] = useState(80);
  const [data2, updateData2] = useState(90);
  const [data3, updateData3] = useState(99);

  useEffect(() => {
    setInterval(() => {
      const val = parseInt((Math.random() * 100).toFixed(2));
      updateData22(val);
    }, 2000);
  }, []);

  useEffect(() => {
    setInterval(() => {
      const val = parseInt((Math.random() * 100).toFixed(2));
      updateData1(val);
    }, 2000);
  }, []);
  useEffect(() => {
    setInterval(() => {
      const val = parseInt((Math.random() * 100).toFixed(2));
      updateData2(val);
    }, 2000);
  }, []);
  useEffect(() => {
    setInterval(() => {
      const val = parseInt((Math.random() * 100).toFixed(2));
      updateData3(val);
    }, 2000);
  }, []);



  return (
    <Layout title="Grid">
      <Row>
        <Col breakPoint={{ xs: 12, md: 6, lg:6, xl: 3}}>
          <Card>
            <header>Active Power - W</header>
            <CardBody>
              <ChartGauge data={data22} />
            </CardBody>
            <CardFooter>Footer</CardFooter>

          </Card>
        </Col>
        <Col breakPoint={{ xs: 12, md: 6, lg:6, xl: 3 }}>
          <Card>
            <header>Active Power (KW)</header>
            <CardBody>
              <ChartGauge data={data1} />
            </CardBody>
            <CardFooter>Footer</CardFooter>

          </Card>
        </Col>
        <Col breakPoint={{ xs: 12, md: 6, lg:6, xl: 3 }}>
          <Card>
          <CardHeader>Active Power (KW)</CardHeader>
            <CardBody>
              <ChartGauge data={data2} />
            </CardBody>
            <CardFooter>Footer</CardFooter>

          </Card>
        </Col>
        <Col breakPoint={{ xs: 12, md: 6, lg:6, xl: 3}}>
          <Card>
            <header>Active Power (KW)</header>
            <CardBody>
              <ChartGauge data={data3} />
            </CardBody>
            <CardFooter>Footer</CardFooter>

          </Card>
        </Col>
      </Row>
      <Row>
      <Col breakPoint={{ xs: 12}}>
          <Card>
            <CardHeader>
              <span>Live KL- Meter Readings</span>

            </CardHeader>
            <CardBody>
              <Styles>
                <table  className="table">
                  <tr>
                    <th>Timestamp</th>
                    <th>Active Power Total (KW)</th>
                    <th>Power Factor Total(-)</th>
                    <th>Voltage L-L Avg(V)</th>
                    <th>Current Avg (A)</th>
                    <th>Forward Active Engineering</th>
                  </tr>
                  <tbody> 
                  <tr>
                      <td>SSB-4</td>
                      <td>3222.51</td>
                      <td>0.89</td>
                      <td>422.96</td>
                      <td>5.05</td>
                      <td>103875872</td>
                      </tr>
                    <tr>
                      <td>AC Meter 4rth Floor</td>
                      <td>2120.01</td>
                      <td>-0.97</td>
                      <td>422.92</td>
                      <td>3.68</td>
                      <td>37200608</td>
                  </tr>
                  </tbody>
                </table>
                </Styles>
            </CardBody>
            <CardFooter>Footer</CardFooter>
          </Card>
        </Col>
        </Row>
    </Layout>
    
  );
};
export default Home;
