import React from "react";

function FAQs() {
  return (
    <section id="faq">
      <div className="container py-5">
        <div className="row faq">
          <div className="col-12">
            <h3>Frequently Asked Questions</h3>
          </div>
          <div className="col-md-8 offset-md-2 mt-4">
            <div className="accordion" id="parentAccordion">
              <div className="card">
                <div className="card-header" id="parent1">
                  <h3>
                    <button
                      className="btn btn-link btn-block"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      About Corona Virus
                    </button>
                  </h3>
                </div>
                <div
                  id="collapseOne"
                  className="collapse show"
                  aria-labelledby="parent1"
                  data-parent="#parentAccordion"
                >
                  <div className="card-body">
                    <div>
                      <h4>What is novel corona virus?</h4>
                      <p>
                        On February 11, 2020 the World Health Organization
                        announced an official name for the disease that is
                        causing the 2019 novel coronavirus outbreak, first
                        identified in Wuhan China. The new name of this disease
                        is coronavirus disease 2019, abbreviated as COVID-19. In
                        COVID-19, ‘CO’ stands for ‘corona,’ ‘VI’ for ‘virus,’
                        and ‘D’ for disease. Formerly, this disease was referred
                        to as “2019 novel coronavirus” or “2019-nCoV”. A novel
                        coronavirus is a new coronavirus that has not been
                        previously identified. The virus causing coronavirus
                        disease 2019 (COVID-19), is not the same as the
                        coronaviruses that commonly circulate among humans and
                        cause mild illness, like the common cold.
                      </p>
                    </div>
                    <div>
                      <h4>
                        How can people help stop stigma related to COVID-19?{" "}
                      </h4>
                      <p>
                        People can fight stigma and help, not hurt, others by
                        providing social support. Counter stigma by learning and
                        sharing facts. Communicating the facts that viruses do
                        not target specific racial or ethnic groups and how
                        COVID-19 actually spreads can help stop stigma.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="parent2">
                  <h3>
                    <button
                      className="btn btn-link btn-block collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      How it Spreads?
                    </button>
                  </h3>
                </div>
                <div
                  id="collapseTwo"
                  className="collapse"
                  aria-labelledby="parent2"
                  data-parent="#parentAccordion"
                >
                  <div className="card-body">
                    <div>
                      <h4>What is the source of the virus?</h4>
                      <p>
                        Coronaviruses are a large family of viruses. Some cause
                        illness in people, and others, such as canine and feline
                        coronaviruses, only infect animals. Rarely, animal
                        coronaviruses that infect animals have emerged to infect
                        people and can spread between people. This is suspected
                        to have occurred for the virus that causes COVID-19.
                        Middle East Respiratory Syndrome (MERS) and Severe Acute
                        Respiratory Syndrome (SARS) are two other examples of
                        coronaviruses that originated from animals and then
                        spread to people. More information about the source and
                        spread of COVID-19 is available on the Situation
                        Summary: Source and Spread of the Virus.
                      </p>
                    </div>
                    <div>
                      <h4>How does the virus spread?</h4>
                      <p>
                        This virus was first detected in Wuhan City, Hubei
                        Province, China. The first infections were linked to a
                        live animal market, but the virus is now spreading from
                        person-to-person. It’s important to note that
                        person-to-person spread can happen on a continuum. Some
                        viruses are highly contagious (like measles), while
                        other viruses are less so. The virus that causes
                        COVID-19 seems to be spreading easily and sustainably in
                        the community (“community spread”) in some affected
                        geographic areas. Community spread means people have
                        been infected with the virus in an area, including some
                        who are not sure how or where they became infected.
                        Learn what is known about the spread of newly emerged
                        coronaviruses.
                      </p>
                    </div>
                    <div>
                      <h4>
                        Can someone who has had COVID-19 spread illness to
                        others?
                      </h4>
                      <p>
                        The virus that causes COVID-19 is spreading from
                        person-to-person. Someone who is actively sick with
                        COVID-19 can spread the illness to others. That is why
                        CDC recommends that these patients be isolated either in
                        the hospital or at home (depending on how sick they are)
                        until they are better and no longer pose a risk of
                        infecting others. How long someone is actively sick can
                        vary so the decision on when to release someone from
                        isolation is made on a case-by-case basis in
                        consultation with doctors, infection prevention and
                        control experts, and public health officials and
                        involves considering specifics of each situation
                        including disease severity, illness signs and symptoms,
                        and results of laboratory testing for that patient.
                        Current CDC guidance for when it is OK to release
                        someone from isolation is made on a case by case basis
                        and includes meeting all of the following requirements:
                        The patient is free from fever without the use of
                        fever-reducing medications. The patient is no longer
                        showing symptoms, including cough. The patient has
                        tested negative on at least two consecutive respiratory
                        specimens collected at least 24 hours apart. Someone who
                        has been released from isolation is not considered to
                        pose a risk of infection to others.
                      </p>
                    </div>
                    <div>
                      <h4>What is community spread?</h4>
                      <p>
                        Community spread means people have been infected with
                        the virus in an area, including some who are not sure
                        how or where they became infected.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="parent5">
                  <h3>
                    <button
                      className="btn btn-link btn-block collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Protection
                    </button>
                  </h3>
                </div>
                <div
                  id="collapseThree"
                  className="collapse"
                  aria-labelledby="parent3"
                  data-parent="#parentAccordion"
                >
                  <div className="card-body">
                    <div>
                      <h4>
                        What can I do to protect myself and prevent the spread
                        of disease?
                      </h4>
                      <p>
                        Stay aware of the latest information on the COVID-19
                        outbreak, available on the WHO website and through your
                        national and local public health authority. Many
                        countries around the world have seen cases of COVID-19
                        and several have seen outbreaks. Authorities in China
                        and some other countries have succeeded in slowing or
                        stopping their outbreaks. However, the situation is
                        unpredictable so check regularly for the latest news.{" "}
                        <br />
                        <b>
                          You can reduce your chances of being infected or
                          spreading COVID-19 by taking some simple precautions:
                        </b>
                        <br />
                        <i>
                          -Regularly and thoroughly clean your hands with an
                          alcohol-based hand rub or wash them with soap and
                          water.
                        </i>
                        <br /> Why? Washing your hands with soap and water or
                        using alcohol-based hand rub kills viruses that may be
                        on your hands. <br />
                        <i>
                          -Maintain at least 1 metre (3 feet) distance between
                          yourself and anyone who is coughing or sneezing.
                        </i>
                        <br />
                        Why? When someone coughs or sneezes they spray small
                        liquid droplets from their nose or mouth which may
                        contain virus. If you are too close, you can breathe in
                        the droplets, including the COVID-19 virus if the person
                        coughing has the disease. <br />
                        <i>-Avoid touching eyes, nose and mouth.</i> <br /> Why?
                        Hands touch many surfaces and can pick up viruses. Once
                        contaminated, hands can transfer the virus to your eyes,
                        nose or mouth. From there, the virus can enter your body
                        and can make you sick. <br />
                        <i>
                          -Make sure you, and the people around you, follow good
                          respiratory hygiene. This means covering your mouth
                          and nose with your bent elbow or tissue when you cough
                          or sneeze. Then dispose of the used tissue
                          immediately.{" "}
                        </i>{" "}
                        <br />
                        Why? Droplets spread virus. By following good
                        respiratory hygiene you protect the people around you
                        from viruses such as cold, flu and COVID-19. <br />
                        <i>
                          -Stay home if you feel unwell. If you have a fever,
                          cough and difficulty breathing, seek medical attention
                          and call in advance. Follow the directions of your
                          local health authority.{" "}
                        </i>{" "}
                        <br /> Why? National and local authorities will have the
                        most up to date information on the situation in your
                        area. Calling in advance will allow your health care
                        provider to quickly direct you to the right health
                        facility. This will also protect you and help prevent
                        spread of viruses and other infections.
                        <i>
                          -Keep up to date on the latest COVID-19 hotspots
                          (cities or local areas where COVID-19 is spreading
                          widely). If possible, avoid traveling to places –
                          especially if you are an older person or have
                          diabetes, heart or lung disease.
                        </i>{" "}
                        <br /> Why? You have a higher chance of catching
                        COVID-19 in one of these areas.
                      </p>
                    </div>
                    <div>
                      <h4>
                        What should people at higher risk of serious illness
                        with COVID-19 do?
                      </h4>
                      <p>
                        If you are at higher risk of getting very sick from
                        COVID-19, you should: stock up on supplies; take
                        everyday precautions to keep space between yourself and
                        others; when you go out in public, keep away from others
                        who are sick; limit close contact and wash your hands
                        often; and avoid crowds, cruise travel, and
                        non-essential travel. If there is an outbreak in your
                        community, stay home as much as possible. Watch for
                        symptoms and emergency signs. If you get sick, stay home
                        and call your doctor. More information on how to
                        prepare, what to do if you get sick, and how communities
                        and caregivers can support those at higher risk is
                        available on People at Risk for Serious Illness from
                        COVID-19.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="parent3">
                  <h3>
                    <button
                      className="btn btn-link btn-block collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Symptons and Testing
                    </button>
                  </h3>
                </div>
                <div
                  id="collapseThree"
                  className="collapse"
                  aria-labelledby="parent3"
                  data-parent="#parentAccordion"
                >
                  <div className="card-body">
                    <div>
                      <h4>What are the symptoms of COVID-19?</h4>
                      <p>
                        The most common symptoms of COVID-19 are fever,
                        tiredness, and dry cough. Some patients may have aches
                        and pains, nasal congestion, runny nose, sore throat or
                        diarrhea. These symptoms are usually mild and begin
                        gradually. Some people become infected but don’t develop
                        any symptoms and don't feel unwell. Most people (about
                        80%) recover from the disease without needing special
                        treatment. Around 1 out of every 6 people who gets
                        COVID-19 becomes seriously ill and develops difficulty
                        breathing. Older people, and those with underlying
                        medical problems like high blood pressure, heart
                        problems or diabetes, are more likely to develop serious
                        illness. People with fever, cough and difficulty
                        breathing should seek medical attention.
                      </p>
                    </div>
                    <div>
                      <h4>Should I be tested for COVID-19</h4>
                      <p>
                        Not everyone needs to be tested for COVID-19. For
                        information about testing, see{" "}
                        <a href="https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/testing.html">
                          Testing for COVID-19.
                        </a>
                      </p>
                    </div>
                    <div>
                      <h4>
                        Can a person be tested negative and later test positive
                        for COVID-19
                      </h4>
                      <p>
                        Using the CDC-developed diagnostic test, a negative
                        result means that the virus that causes COVID-19 was not
                        found in the person’s sample. In the early stages of
                        infection, it is possible the virus will not be
                        detected. For COVID-19, a negative test result for a
                        sample collected while a person has symptoms likely
                        means that the COVID-19 virus is not causing their
                        current illness.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="parent5">
                  <h3>
                    <button
                      className="btn btn-link btn-block collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseFive"
                      aria-expanded="false"
                      aria-controls="collapseFive"
                    >
                      Myths Bluster of Coronavirus
                    </button>
                  </h3>
                </div>
                <div
                  id="collapseFive"
                  className="collapse"
                  aria-labelledby="parent5"
                  data-parent="#parentAccordion"
                >
                  <div className="card-body">
                    <div>
                      <h4>Does taking a hot bath prevent the virus?</h4>
                      <p>
                        Taking a hot bath will not prevent you from catching
                        COVID-19. Your normal body temperature remains around
                        36.5°C to 37°C, regardless of the temperature of your
                        bath or shower. Actually, taking a hot bath with
                        extremely hot water can be harmful, as it can burn you.
                        The best way to protect yourself against COVID-19 is by
                        frequently cleaning your hands. By doing this you
                        eliminate viruses that may be on your hands and avoid
                        infection that could occur by then touching your eyes,
                        mouth, and nose.
                      </p>
                    </div>
                    <div>
                      <h4>
                        How effective are the thermal scanners in detecting
                        peopleinfected with the coronavirus
                      </h4>
                      <p>
                        Thermal scanners are effective in detecting people who
                        have developed a fever (i.e. have a higher than normal
                        body temperature) because of infection with the new
                        coronavirus. <br />
                        However, they cannot detect people who are infected but
                        are not yet sick with fever. This is because it takes
                        between 2 and 10 days before people who are infected
                        become sick and develop a fever.
                      </p>
                    </div>
                    <div>
                      <h4>
                        Can coronavirus be transmitted in areas with hot and
                        humid climates?
                      </h4>
                      <p>
                        From the evidence so far, the COVID-19 virus can be
                        transmitted in ALL AREAS, including areas with hot and
                        humid weather. Regardless of climate, adopt protective
                        measures if you live in, or travel to an area reporting
                        COVID-19. The best way to protect yourself against
                        COVID-19 is by frequently cleaning your hands. By doing
                        this you eliminate viruses that may be on your hands and
                        avoid infection that could occur by then touching your
                        eyes, mouth, and nose.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQs;
