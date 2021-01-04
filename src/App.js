import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Comment, Container, Label, Menu, Search, Table, Icon, Header, Form, Button, Grid, Feed, Image } from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <div>
        <Container>
          <Table celled structured textAlign="center">
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell colSpan='2' textAlign="right">
                  <Search placeholder="Search..." />
                </Table.HeaderCell>
              </Table.Row>
              <Table.Row>
                <Table.HeaderCell>Nama Document</Table.HeaderCell>
                <Table.HeaderCell>Jenis File</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row>
                <Table.Cell textAlign='left'>
                  <Label ribbon>Panduan Belajar JavaScript</Label>
                </Table.Cell>
                <Table.Cell>PDF</Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.Cell textAlign='left'>Panduan Belajar CSS</Table.Cell>
                <Table.Cell>PDF</Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.Cell textAlign='left'>Panduan Belajar React JS</Table.Cell>
                <Table.Cell>PDF</Table.Cell>
              </Table.Row>
            </Table.Body>

            <Table.Footer>
              <Table.HeaderCell colSpan="3">
                <Menu floated="right" pagination>
                  <Menu.Item as="a" icon><Icon name="chevron left" /></Menu.Item>
                  <Menu.Item as="a">1</Menu.Item>
                  <Menu.Item as="a">2</Menu.Item>
                  <Menu.Item as="a">3</Menu.Item>
                  <Menu.Item as="a">4</Menu.Item>
                  <Menu.Item as="a"><Icon name="chevron right" /></Menu.Item>
                </Menu>
              </Table.HeaderCell>
            </Table.Footer>
          </Table>
          <br /><br />

          <Grid columns={3}>
            <Grid.Column  >
              <Comment.Group>
                <Header as="h3" dividing>
                  Comments
                </Header>

                <Comment>
                  <Comment.Avatar src="https://react.semantic-ui.com/images/avatar/small/matt.jpg" />
                  <Comment.Content>
                    <Comment.Author as="a">Satria</Comment.Author>
                    <Comment.Metadata>Today at 5:42PM</Comment.Metadata>
                    <Comment.Text>
                      <p>Hello...!</p>
                    </Comment.Text>
                    <Comment.Actions>
                      <Comment.Action>Reply</Comment.Action>
                    </Comment.Actions>
                  </Comment.Content>
                </Comment>

                <Comment>
                  <Comment.Avatar src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg" />
                  <Comment.Content>
                    <Comment.Author as="a">Danang</Comment.Author>
                    <Comment.Metadata>Today at 5:50PM</Comment.Metadata>
                    <Comment.Text>
                      <p>Kerjakan sesuatu semampu kamu...</p>
                    </Comment.Text>
                    <Comment.Actions>
                      <Comment.Action>Reply</Comment.Action>
                    </Comment.Actions>
                  </Comment.Content>

                  <Comment.Group>
                    <Comment>
                      <Comment.Avatar src="https://react.semantic-ui.com/images/avatar/small/jenny.jpg" />
                      <Comment.Content>
                        <Comment.Author as="a">Rizky</Comment.Author>
                        <Comment.Metadata>Just now</Comment.Metadata>
                        <Comment.Text>
                          <p>Kamu sekarang dimana Danang?</p>
                        </Comment.Text>
                        <Comment.Actions>
                          <Comment.Action>Reply</Comment.Action>
                        </Comment.Actions>
                      </Comment.Content>
                    </Comment>
                  </Comment.Group>
                </Comment>

                <Comment>
                  <Comment.Avatar src="https://react.semantic-ui.com/images/avatar/small/joe.jpg" />
                  <Comment.Content>
                    <Comment.Author as="a">Joe</Comment.Author>
                    <Comment.Metadata>1 days ago</Comment.Metadata>
                    <Comment.Text>
                      <p>Terimakasih ada nasihatnya</p>
                    </Comment.Text>
                    <Comment.Actions>
                      <Comment.Action>Reply</Comment.Action>
                    </Comment.Actions>
                  </Comment.Content>
                </Comment>

                <Form reply>
                  <Form.TextArea />
                  <Button content="Add Reply" labelPosition="left" icon="edit" primary />
                </Form>
              </Comment.Group>
            </Grid.Column>

            <Grid.Column ></Grid.Column>

            <Grid.Column  >
              <Feed>
                <Feed.Event>
                  <Feed.Label>
                    <Image src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg" />
                  </Feed.Label>
                  <Feed.Content>
                    <Feed.Summary>
                      <Feed.User>Elliot Fu</Feed.User> add you as a friend
                      <Feed.Date>1 Hour Ago</Feed.Date>
                    </Feed.Summary>
                    <Feed.Meta>
                      <Feed.Like>
                        <Icon name="like" /> 4 Likes
                      </Feed.Like>
                    </Feed.Meta>
                  </Feed.Content>
                </Feed.Event>

                <Feed.Event>
                  <Feed.Label icon="pencil" />
                  <Feed.Content>
                    <Feed.Summary>
                      You submitted a new post to the page<br />
                      <Feed.Date>3 days ago</Feed.Date>
                    </Feed.Summary>
                    <Feed.Extra text>
                      Saya senang belajar bahasa pemprograman
                      </Feed.Extra>
                    <Feed.Meta>
                      <Feed.Like><Icon name="like" />11 Likes</Feed.Like>
                    </Feed.Meta>
                  </Feed.Content>
                </Feed.Event>

                <Feed.Event>
                  <Feed.Label>
                    <Image src="https://react.semantic-ui.com/images/avatar/small/helen.jpg" />
                  </Feed.Label>
                  <Feed.Content>
                    <Feed.Date>4 days ago</Feed.Date>
                    <Feed.Summary><a href="/">Helen Troy</a> added <a href="/">2 new illustrations</a></Feed.Summary>
                    <Feed.Extra images>
                      <a href="/"><Image src="https://s3-ap-southeast-1.amazonaws.com/niomic/img-v1/c_login_logo.png" /></a>
                      <a href="/"><Image src="https://cdn-images-1.medium.com/max/1600/1*6kK9j74vyOmXYm1gN6ARhQ.png" /></a>
                    </Feed.Extra>
                    <Feed.Meta >
                      <Feed.Like>
                        <Icon name="like" />
                        2 Likes</Feed.Like>
                    </Feed.Meta>
                  </Feed.Content>
                </Feed.Event>


              </Feed>
            </Grid.Column>

          </Grid>
        </Container>


      </div>

    );
  }
}

export default App;