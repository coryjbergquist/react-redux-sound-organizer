require 'pry'

class CommentsController < ApplicationController

  def index
    @comments = Comment.all
    render json: @comments, status: 200
  end

  def show
    @comment = Comment.find(params[:id])
    render json: @comment, status: 200
  end

  def create
    @sound = Sound.find(params[:soundId])
    @comment = @sound.comments.build(comment_params)
    @sound.save
    render json: @comment, status: 200
  end

  def update
    @comment = Comment.find(params[:id])
    @comment.update(comment_params)
    render json: @comment, status: 200
  end

  def destroy
    @comment = Comment.find(params[:id])
    @comment.delete
    @comments = Comment.all
    render json: @comments, status: 200
  end


  private
    def comment_params
      params.require(:comment).permit(:text, :soundId)
    end



  end
