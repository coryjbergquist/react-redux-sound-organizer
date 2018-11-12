require 'pry'

class CommentsController < ApplicationController

  def index
    @comments = comment.all
    render json: @comments, status: 200
  end

  def show
    @comment = comment.find(params[:id])
    render json: @comment, status: 200
  end

  def create
    @comment = comment.create(comment_params)
    render json: @comment, status: 200
  end

  def update
    @comment = comment.find(params[:id])
    @comment.update(comment_params)
    render json: @comment, status: 200
  end

  def destroy
    @comment = comment.find(params[:id])
    @comment.delete
    @comments = comment.all
    render json: @comments, status: 200
  end


  private
    def comment_params
      params.require(:comment).permit(:text)
    end



  end
