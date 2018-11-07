require 'pry'

class SoundsController < ApplicationController

  def index
    @sounds = Sound.first
    render json: @sounds
  end

  end
