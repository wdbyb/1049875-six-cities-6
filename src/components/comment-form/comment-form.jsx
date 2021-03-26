import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {AuthStatus} from '../../const.js';
import {commentPost} from "../../store/api-actions";
import {ActionCreator} from '../../store/action.js';

const TargetTypes = {
  RADIO: `radio`
};

const CommentForm = (props) => {
  const {authStatus, offerID, onCommentSubmit, clearCommentForm, commentSuccess} = props;
  const [reviewComment, setReviewComment] = useState(``);
  const [reviewRating, setReviewRating] = useState(0);
  const [isElementsDisabled, setElementsState] = useState(false);

  if (authStatus === AuthStatus.NO_AUTH) {
    return null;
  }

  useEffect(
      () => {
        if (clearCommentForm) {
          setReviewComment(``);
          setReviewRating(0);
          setElementsState(false);
          commentSuccess();
        }
        return () => {};
      },
      [clearCommentForm, setReviewComment, setReviewRating, setElementsState]
  );

  const handleChangeOnStars = (evt) => {
    if (evt.target.type === TargetTypes.RADIO) {
      const newRating = evt.target.value;
      setReviewRating(newRating);
    }
  };

  const handleChangeOnComment = (evt) => {
    const newComment = evt.target.value;
    setReviewComment(newComment);
  };

  const handleCommentSubmit = (evt) => {
    evt.preventDefault();

    if (reviewComment.length < 50 || reviewRating === 0) {
      alert(`To submit review please make sure to set rating and describe your stay with at least 50 characters, but no more than 300`);
      return;
    }

    setElementsState(true);

    onCommentSubmit({
      comment: reviewComment,
      rating: reviewRating,
      offerID
    });
  };

  return (
    <>
      <form className="reviews__form form" action="#" method="post" onSubmit={handleCommentSubmit}>
        <label className="reviews__label form__label" htmlFor="review">Your review</label>
        <div className="reviews__rating-form form__rating">
          <input className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars" type="radio" checked={+reviewRating === 5} onChange={handleChangeOnStars} disabled={isElementsDisabled} />
          <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>

          <input className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio" checked={+reviewRating === 4} onChange={handleChangeOnStars} disabled={isElementsDisabled} />
          <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>

          <input className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio" checked={+reviewRating === 3} onChange={handleChangeOnStars} disabled={isElementsDisabled} />
          <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>

          <input className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio" checked={+reviewRating === 2} onChange={handleChangeOnStars} disabled={isElementsDisabled} />
          <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>

          <input className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio" checked={+reviewRating === 1} onChange={handleChangeOnStars} disabled={isElementsDisabled} />
          <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>
        </div>
        <textarea onChange={handleChangeOnComment} value={reviewComment} className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" min="50" max="300" disabled={isElementsDisabled}></textarea>
        <div className="reviews__button-wrapper">
          <p className="reviews__help">
            To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
          </p>
          <button className="reviews__submit form__submit button" type="submit" disabled={isElementsDisabled}>Submit</button>
        </div>
      </form>
    </>
  );
};

CommentForm.propTypes = {
  authStatus: PropTypes.string.isRequired,
  offerID: PropTypes.number.isRequired,
  onCommentSubmit: PropTypes.func.isRequired,
  commentSuccess: PropTypes.func.isRequired,
  clearCommentForm: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  clearCommentForm: state.clearCommentForm
});

const mapDispatchToProps = (dispatch) => ({
  onCommentSubmit(reviewData) {
    dispatch(commentPost(reviewData));
  },

  commentSuccess() {
    dispatch(ActionCreator.clearCommentForm());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);
