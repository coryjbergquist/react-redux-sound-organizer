class MoviesController < ApplicationController

  def index

      @movies = Movie.order(:title)
      @reviews = Review.last(5).reverse

    end

  end
