import React from 'react'
import SectionTitle from '../../components/SectionTitle'
import Projects from '../../api/projects'


const ProjectSection = (props) => {
    return(
        <section className={`wpo-portfolio-section section-padding ${props.prClass}`}>
            <div className="container-fluid">
            <SectionTitle topTitle={'Portfolio'} MainTitle={'Our Amazing Work'}/>
                <div className="sortable-gallery">
                    <div className="gallery-filters"></div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="portfolio-grids gallery-container clearfix">
                                {Projects.slice(15, 25).map((project, pitem) => (
                                    <div className="grid" key={pitem}>
                                        <div className="img-holder">
                                            <img src={project.pimg1} alt=""/>
                                            <div className="hover-content">
                                                <h4>{project.title}</h4>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </section>
    )
}

export default ProjectSection;