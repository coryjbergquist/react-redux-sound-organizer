require 'pry'

class SoundsController < ApplicationController

  def index
    @sounds = Sound.all
    render json: @sounds, status: 200
  end

  def show
    @sound = Sound.find(params[:id])
    render json: @sound, status: 200
  end

  def create
    @sound = Sound.create(sound_params)
    render json: @sound, status: 200
  end

  def update
    @sound = Sound.find(params[:id])
    @sound.update(sound_params)
    render json: @sound, status: 200
  end

  def destroy
    @sound = Sound.find(params[:id])
    @sound.delete
    render json: {soundId: @sound.id}
  end


  private
    def sound_params
      params.require(:sound).permit(:name, :description)
    end



  end
