import React from 'react'

class ArticlesChart extends Comment {
    render(){
        return <div ref={this.setContainerRef}></div>
    }
    componentDidUpdate(oldProps){
        // compare oldProps with this.props
        // update chart inside this.containerRef
    }

    setContainerRef = (ref) => {
        if (ref){
            this.containerRef = ref
        } else {
            // do some cleanup
        }
    }

    componentWillUnmount(){
        // remove all d3 junk
    }
}
export default ArticlesChart
