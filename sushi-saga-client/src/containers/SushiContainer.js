import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'
import FormButton from '../components/FormButton'

class SushiContainer extends React.Component{

  state ={
    page: 1,
  }

  handlePageIncrease = () => {
    if ((this.state.page + 1) * 4 <= this.props.sushis.length){
      this.setState({page: this.state.page + 1})
    } else {
      this.setState({page: 1})
    }
  }

  render() {
    const numpage = this.state.page * 4
    return (
      <Fragment>
        <div className="belt">
          {
            this.props.sushis.slice(numpage - 4, numpage).map(sushi => <Sushi eatSushi={this.props.eatSushi} sushi={sushi}/>)
          }
          <MoreButton handlePageIncrease={this.handlePageIncrease}/>
          <FormButton toggleForm={this.props.toggleForm} />
        </div>
      </Fragment>
    )
  }
}

export default SushiContainer