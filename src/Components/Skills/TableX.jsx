import React from 'react'
import { Slide } from 'react-reveal'
import { Table } from 'semantic-ui-react'


export default function TableX({ color, headers, body }) { //body table of tables
  return (
    <Slide top >
      <div>
        <Table color={color} key={color} inverted>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Web Development</Table.HeaderCell>
              <Table.HeaderCell>Calories</Table.HeaderCell>
              <Table.HeaderCell>Protein</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <Table.Cell>JavaScript</Table.Cell>
              <Table.Cell>200</Table.Cell>
              <Table.Cell>0g</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>React</Table.Cell>
              <Table.Cell>310</Table.Cell>
              <Table.Cell>0g</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    </Slide>
  )
}
