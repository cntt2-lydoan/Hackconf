import React, { Component } from 'react'
import Workshop from './agenda/Workshop'
import Day1 from './agenda/Day1';
import Day2 from './agenda/Day2';

 class Agenda extends Component {
    render() {
        return (
           
            <section className="section schedule-container" id="program">
            <article>
              <div>
                <h2 className="text-center">Agenda</h2>
              </div>
              <div className="schedule-container__tabs tabs">
                <div ref="tab-content-1" className="schedule-container__tabs__tab">
                  Workshops
                </div>
                <div ref="tab-content-2" className="schedule-container__tabs__tab selected">
                  Day 1
                </div>
                <div ref="tab-content-3" className="schedule-container__tabs__tab">
                  Day 2
                </div>
              </div>


              <div className="tab-contents">
                
                <Workshop />
                <Day1 />
                <Day2/>
              </div>
            </article>
          </section>
          

        )
    }
}
export default Agenda;