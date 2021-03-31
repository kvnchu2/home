import React from "react";


const GetInTouch = ({ heading, message, email }) => {
  return (
    <div id="getintouch">
      <h2 className="display-4 pb-3 text-center">{heading}</h2>
      <form id="contact-form" method="post" action="https://formspree.io/f/mayawrkd">

          <div class="messages"></div>

          <div class="controls">

              <div class="row">
                  <div class="col-md-6">
                      <div class="form-group">
                          <label for="form_name">Firstname *</label>
                          <input id="form_name" type="text" name="name" class="form-control" placeholder="Please enter your firstname *" required="required" data-error="Firstname is required."></input>
                          <div class="help-block with-errors"></div>
                      </div>
                  </div>
                  <div class="col-md-6">
                      <div class="form-group">
                          <label for="form_lastname">Lastname *</label>
                          <input id="form_lastname" type="text" name="surname" class="form-control" placeholder="Please enter your lastname *" required="required" data-error="Lastname is required."></input>
                          <div class="help-block with-errors"></div>
                      </div>
                  </div>
              </div>
              <div class="row">
                  <div class="col-md-6">
                      <div class="form-group">
                          <label for="form_email">Email *</label>
                          <input id="form_email" type="email" name="email" class="form-control" placeholder="Please enter your email *" required="required" data-error="Valid email is required."></input>
                          <div class="help-block with-errors"></div>
                      </div>
                  </div>
                  <div class="col-md-6">
                      <div class="form-group">
                          <label for="form_need">Please specify your need *</label>
                          <select id="form_need" name="need" class="form-control" required="required" data-error="Please specify your need.">
                              <option value=""></option>
                              <option value="Recruitment">Recruitment</option>
                              <option value="Freelance">Freelance</option>
                              <option value="Networking">Networking</option>
                              <option value="Other">Other</option>
                          </select>
                          <div class="help-block with-errors"></div>
                      </div>
                  </div>
              </div>
              <div class="row">
                  <div class="col-md-12">
                      <div class="form-group">
                          <label for="form_message">Message *</label>
                          <textarea id="form_message" name="message" class="form-control" placeholder="Message for me *" rows="4" required="required" data-error="Please, leave us a message."></textarea>
                          <div class="help-block with-errors"></div>
                      </div>
                  </div>
                  <div class="col-md-12">
                      <input type="submit" class="btn btn-success btn-send" value="Send message"></input>
                  </div>
              </div>
              <div class="row">
                  <div class="col-md-12">
                      <p class="text-muted">
                          <strong>*</strong> These fields are required.</p>
                  </div>
              </div>
          </div>

      </form>
    </div>
  );
};

export default GetInTouch;
